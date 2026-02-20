import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken409 } from "./fragment409";
import type { FragmentToken410 } from "./fragment410";

export const FRAGMENT_411 = gql(`
  fragment Fragment411 on Member130 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_130
    memberCount_130
    memberMetric_130
  }
`);

type FragmentResult411 = ResultOf<typeof FRAGMENT_411>;
type FragmentSelf411 = NonNullable<FragmentResult411>;

export type FragmentToken411 =
  | FragmentSelf411["__typename"]
  | FragmentSelf411["typenameHint"] | FragmentToken409 | FragmentToken410;
