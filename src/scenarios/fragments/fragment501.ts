import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken499 } from "./fragment499";
import type { FragmentToken500 } from "./fragment500";

export const FRAGMENT_501 = gql(`
  fragment Fragment501 on Member220 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_220
    memberCount_220
    memberMetric_220
  }
`);

type FragmentResult501 = ResultOf<typeof FRAGMENT_501>;
type FragmentSelf501 = NonNullable<FragmentResult501>;

export type FragmentToken501 =
  | FragmentSelf501["__typename"]
  | FragmentSelf501["typenameHint"] | FragmentToken499 | FragmentToken500;
