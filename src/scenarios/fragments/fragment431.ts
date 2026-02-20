import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken429 } from "./fragment429";
import type { FragmentToken430 } from "./fragment430";

export const FRAGMENT_431 = gql(`
  fragment Fragment431 on Member150 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_150
    memberCount_150
    memberMetric_150
  }
`);

type FragmentResult431 = ResultOf<typeof FRAGMENT_431>;
type FragmentSelf431 = NonNullable<FragmentResult431>;

export type FragmentToken431 =
  | FragmentSelf431["__typename"]
  | FragmentSelf431["typenameHint"] | FragmentToken429 | FragmentToken430;
