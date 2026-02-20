import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken127 } from "./fragment127";
import type { FragmentToken128 } from "./fragment128";

export const FRAGMENT_129 = gql(`
  fragment Fragment129 on Member128 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_128
    memberCount_128
    memberMetric_128
  }
`);

type FragmentResult129 = ResultOf<typeof FRAGMENT_129>;
type FragmentSelf129 = NonNullable<FragmentResult129>;

export type FragmentToken129 =
  | FragmentSelf129["__typename"]
  | FragmentSelf129["typenameHint"] | FragmentToken127 | FragmentToken128;
