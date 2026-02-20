import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken515 } from "./fragment515";
import type { FragmentToken516 } from "./fragment516";

export const FRAGMENT_517 = gql(`
  fragment Fragment517 on Member236 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_236
    memberCount_236
    memberMetric_236
  }
`);

type FragmentResult517 = ResultOf<typeof FRAGMENT_517>;
type FragmentSelf517 = NonNullable<FragmentResult517>;

export type FragmentToken517 =
  | FragmentSelf517["__typename"]
  | FragmentSelf517["typenameHint"] | FragmentToken515 | FragmentToken516;
