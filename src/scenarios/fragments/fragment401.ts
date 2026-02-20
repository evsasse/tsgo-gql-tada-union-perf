import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken399 } from "./fragment399";
import type { FragmentToken400 } from "./fragment400";

export const FRAGMENT_401 = gql(`
  fragment Fragment401 on Member120 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_120
    memberCount_120
    memberMetric_120
  }
`);

type FragmentResult401 = ResultOf<typeof FRAGMENT_401>;
type FragmentSelf401 = NonNullable<FragmentResult401>;

export type FragmentToken401 =
  | FragmentSelf401["__typename"]
  | FragmentSelf401["typenameHint"] | FragmentToken399 | FragmentToken400;
