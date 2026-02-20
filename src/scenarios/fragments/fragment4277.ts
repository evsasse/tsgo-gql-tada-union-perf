import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4275 } from "./fragment4275";
import type { FragmentToken4276 } from "./fragment4276";

export const FRAGMENT_4277 = gql(`
  fragment Fragment4277 on Member76 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_76
    memberCount_76
    memberMetric_76
  }
`);

type FragmentResult4277 = ResultOf<typeof FRAGMENT_4277>;
type FragmentSelf4277 = NonNullable<FragmentResult4277>;

export type FragmentToken4277 =
  | FragmentSelf4277["__typename"]
  | FragmentSelf4277["typenameHint"] | FragmentToken4275 | FragmentToken4276;
