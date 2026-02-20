import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken245 } from "./fragment245";
import type { FragmentToken246 } from "./fragment246";

export const FRAGMENT_247 = gql(`
  fragment Fragment247 on Member246 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_246
    memberCount_246
    memberMetric_246
  }
`);

type FragmentResult247 = ResultOf<typeof FRAGMENT_247>;
type FragmentSelf247 = NonNullable<FragmentResult247>;

export type FragmentToken247 =
  | FragmentSelf247["__typename"]
  | FragmentSelf247["typenameHint"] | FragmentToken245 | FragmentToken246;
