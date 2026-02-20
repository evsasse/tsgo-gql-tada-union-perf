import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4844 } from "./fragment4844";
import type { FragmentToken4845 } from "./fragment4845";

export const FRAGMENT_4846 = gql(`
  fragment Fragment4846 on Member85 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_85
    memberCount_85
    memberMetric_85
  }
`);

type FragmentResult4846 = ResultOf<typeof FRAGMENT_4846>;
type FragmentSelf4846 = NonNullable<FragmentResult4846>;

export type FragmentToken4846 =
  | FragmentSelf4846["__typename"]
  | FragmentSelf4846["typenameHint"] | FragmentToken4844 | FragmentToken4845;
