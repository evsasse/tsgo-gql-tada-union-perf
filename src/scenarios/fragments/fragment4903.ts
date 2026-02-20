import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4901 } from "./fragment4901";
import type { FragmentToken4902 } from "./fragment4902";

export const FRAGMENT_4903 = gql(`
  fragment Fragment4903 on Member142 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_142
    memberCount_142
    memberMetric_142
  }
`);

type FragmentResult4903 = ResultOf<typeof FRAGMENT_4903>;
type FragmentSelf4903 = NonNullable<FragmentResult4903>;

export type FragmentToken4903 =
  | FragmentSelf4903["__typename"]
  | FragmentSelf4903["typenameHint"] | FragmentToken4901 | FragmentToken4902;
