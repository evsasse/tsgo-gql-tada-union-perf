import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken530 } from "./fragment530";
import type { FragmentToken531 } from "./fragment531";

export const FRAGMENT_532 = gql(`
  fragment Fragment532 on Member251 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_251
    memberCount_251
    memberMetric_251
  }
`);

type FragmentResult532 = ResultOf<typeof FRAGMENT_532>;
type FragmentSelf532 = NonNullable<FragmentResult532>;

export type FragmentToken532 =
  | FragmentSelf532["__typename"]
  | FragmentSelf532["typenameHint"] | FragmentToken530 | FragmentToken531;
