import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4902 } from "./fragment4902";
import type { FragmentToken4903 } from "./fragment4903";

export const FRAGMENT_4904 = gql(`
  fragment Fragment4904 on Member143 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_143
    memberCount_143
    memberMetric_143
  }
`);

type FragmentResult4904 = ResultOf<typeof FRAGMENT_4904>;
type FragmentSelf4904 = NonNullable<FragmentResult4904>;

export type FragmentToken4904 =
  | FragmentSelf4904["__typename"]
  | FragmentSelf4904["typenameHint"] | FragmentToken4902 | FragmentToken4903;
