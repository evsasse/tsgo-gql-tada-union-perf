import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken217 } from "./fragment217";
import type { FragmentToken218 } from "./fragment218";

export const FRAGMENT_219 = gql(`
  fragment Fragment219 on Member218 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_218
    memberCount_218
    memberMetric_218
  }
`);

type FragmentResult219 = ResultOf<typeof FRAGMENT_219>;
type FragmentSelf219 = NonNullable<FragmentResult219>;

export type FragmentToken219 =
  | FragmentSelf219["__typename"]
  | FragmentSelf219["typenameHint"] | FragmentToken217 | FragmentToken218;
