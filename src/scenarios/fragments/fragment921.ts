import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken919 } from "./fragment919";
import type { FragmentToken920 } from "./fragment920";

export const FRAGMENT_921 = gql(`
  fragment Fragment921 on Member80 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_80
    memberCount_80
    memberMetric_80
  }
`);

type FragmentResult921 = ResultOf<typeof FRAGMENT_921>;
type FragmentSelf921 = NonNullable<FragmentResult921>;

export type FragmentToken921 =
  | FragmentSelf921["__typename"]
  | FragmentSelf921["typenameHint"] | FragmentToken919 | FragmentToken920;
