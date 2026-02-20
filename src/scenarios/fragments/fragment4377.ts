import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4375 } from "./fragment4375";
import type { FragmentToken4376 } from "./fragment4376";

export const FRAGMENT_4377 = gql(`
  fragment Fragment4377 on Member176 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_176
    memberCount_176
    memberMetric_176
  }
`);

type FragmentResult4377 = ResultOf<typeof FRAGMENT_4377>;
type FragmentSelf4377 = NonNullable<FragmentResult4377>;

export type FragmentToken4377 =
  | FragmentSelf4377["__typename"]
  | FragmentSelf4377["typenameHint"] | FragmentToken4375 | FragmentToken4376;
