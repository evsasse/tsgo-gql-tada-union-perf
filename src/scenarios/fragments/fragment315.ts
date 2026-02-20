import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken313 } from "./fragment313";
import type { FragmentToken314 } from "./fragment314";

export const FRAGMENT_315 = gql(`
  fragment Fragment315 on Member34 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_34
    memberCount_34
    memberMetric_34
  }
`);

type FragmentResult315 = ResultOf<typeof FRAGMENT_315>;
type FragmentSelf315 = NonNullable<FragmentResult315>;

export type FragmentToken315 =
  | FragmentSelf315["__typename"]
  | FragmentSelf315["typenameHint"] | FragmentToken313 | FragmentToken314;
