import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4899 } from "./fragment4899";
import type { FragmentToken4900 } from "./fragment4900";

export const FRAGMENT_4901 = gql(`
  fragment Fragment4901 on Member140 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_140
    memberCount_140
    memberMetric_140
  }
`);

type FragmentResult4901 = ResultOf<typeof FRAGMENT_4901>;
type FragmentSelf4901 = NonNullable<FragmentResult4901>;

export type FragmentToken4901 =
  | FragmentSelf4901["__typename"]
  | FragmentSelf4901["typenameHint"] | FragmentToken4899 | FragmentToken4900;
