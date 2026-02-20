import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken599 } from "./fragment599";
import type { FragmentToken600 } from "./fragment600";

export const FRAGMENT_601 = gql(`
  fragment Fragment601 on Member40 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_40
    memberCount_40
    memberMetric_40
  }
`);

type FragmentResult601 = ResultOf<typeof FRAGMENT_601>;
type FragmentSelf601 = NonNullable<FragmentResult601>;

export type FragmentToken601 =
  | FragmentSelf601["__typename"]
  | FragmentSelf601["typenameHint"] | FragmentToken599 | FragmentToken600;
