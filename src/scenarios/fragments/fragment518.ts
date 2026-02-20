import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken516 } from "./fragment516";
import type { FragmentToken517 } from "./fragment517";

export const FRAGMENT_518 = gql(`
  fragment Fragment518 on Member237 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_237
    memberCount_237
    memberMetric_237
  }
`);

type FragmentResult518 = ResultOf<typeof FRAGMENT_518>;
type FragmentSelf518 = NonNullable<FragmentResult518>;

export type FragmentToken518 =
  | FragmentSelf518["__typename"]
  | FragmentSelf518["typenameHint"] | FragmentToken516 | FragmentToken517;
