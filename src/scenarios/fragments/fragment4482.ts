import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4480 } from "./fragment4480";
import type { FragmentToken4481 } from "./fragment4481";

export const FRAGMENT_4482 = gql(`
  fragment Fragment4482 on Member01 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_01
    memberCount_01
    memberMetric_01
  }
`);

type FragmentResult4482 = ResultOf<typeof FRAGMENT_4482>;
type FragmentSelf4482 = NonNullable<FragmentResult4482>;

export type FragmentToken4482 =
  | FragmentSelf4482["__typename"]
  | FragmentSelf4482["typenameHint"] | FragmentToken4480 | FragmentToken4481;
