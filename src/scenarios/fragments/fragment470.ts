import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken468 } from "./fragment468";
import type { FragmentToken469 } from "./fragment469";

export const FRAGMENT_470 = gql(`
  fragment Fragment470 on Member189 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_189
    memberCount_189
    memberMetric_189
  }
`);

type FragmentResult470 = ResultOf<typeof FRAGMENT_470>;
type FragmentSelf470 = NonNullable<FragmentResult470>;

export type FragmentToken470 =
  | FragmentSelf470["__typename"]
  | FragmentSelf470["typenameHint"] | FragmentToken468 | FragmentToken469;
