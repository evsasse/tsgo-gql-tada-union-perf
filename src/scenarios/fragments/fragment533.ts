import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken531 } from "./fragment531";
import type { FragmentToken532 } from "./fragment532";

export const FRAGMENT_533 = gql(`
  fragment Fragment533 on Member252 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_252
    memberCount_252
    memberMetric_252
  }
`);

type FragmentResult533 = ResultOf<typeof FRAGMENT_533>;
type FragmentSelf533 = NonNullable<FragmentResult533>;

export type FragmentToken533 =
  | FragmentSelf533["__typename"]
  | FragmentSelf533["typenameHint"] | FragmentToken531 | FragmentToken532;
