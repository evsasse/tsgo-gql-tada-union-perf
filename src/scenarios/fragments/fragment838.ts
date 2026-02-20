import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken836 } from "./fragment836";
import type { FragmentToken837 } from "./fragment837";

export const FRAGMENT_838 = gql(`
  fragment Fragment838 on Member277 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_277
    memberCount_277
    memberMetric_277
  }
`);

type FragmentResult838 = ResultOf<typeof FRAGMENT_838>;
type FragmentSelf838 = NonNullable<FragmentResult838>;

export type FragmentToken838 =
  | FragmentSelf838["__typename"]
  | FragmentSelf838["typenameHint"] | FragmentToken836 | FragmentToken837;
