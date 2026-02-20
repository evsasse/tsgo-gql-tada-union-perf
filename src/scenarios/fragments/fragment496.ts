import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken494 } from "./fragment494";
import type { FragmentToken495 } from "./fragment495";

export const FRAGMENT_496 = gql(`
  fragment Fragment496 on Member215 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_215
    memberCount_215
    memberMetric_215
  }
`);

type FragmentResult496 = ResultOf<typeof FRAGMENT_496>;
type FragmentSelf496 = NonNullable<FragmentResult496>;

export type FragmentToken496 =
  | FragmentSelf496["__typename"]
  | FragmentSelf496["typenameHint"] | FragmentToken494 | FragmentToken495;
