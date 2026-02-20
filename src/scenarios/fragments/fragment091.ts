import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken089 } from "./fragment089";
import type { FragmentToken090 } from "./fragment090";

export const FRAGMENT_091 = gql(`
  fragment Fragment091 on Member90 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_90
    memberCount_90
    memberMetric_90
  }
`);

type FragmentResult091 = ResultOf<typeof FRAGMENT_091>;
type FragmentSelf091 = NonNullable<FragmentResult091>;

export type FragmentToken091 =
  | FragmentSelf091["__typename"]
  | FragmentSelf091["typenameHint"] | FragmentToken089 | FragmentToken090;
