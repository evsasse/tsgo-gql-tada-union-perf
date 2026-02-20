import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4894 } from "./fragment4894";
import type { FragmentToken4895 } from "./fragment4895";

export const FRAGMENT_4896 = gql(`
  fragment Fragment4896 on Member135 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_135
    memberCount_135
    memberMetric_135
  }
`);

type FragmentResult4896 = ResultOf<typeof FRAGMENT_4896>;
type FragmentSelf4896 = NonNullable<FragmentResult4896>;

export type FragmentToken4896 =
  | FragmentSelf4896["__typename"]
  | FragmentSelf4896["typenameHint"] | FragmentToken4894 | FragmentToken4895;
