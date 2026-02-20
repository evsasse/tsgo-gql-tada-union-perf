import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken207 } from "./fragment207";
import type { FragmentToken208 } from "./fragment208";

export const FRAGMENT_209 = gql(`
  fragment Fragment209 on Member208 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_208
    memberCount_208
    memberMetric_208
  }
`);

type FragmentResult209 = ResultOf<typeof FRAGMENT_209>;
type FragmentSelf209 = NonNullable<FragmentResult209>;

export type FragmentToken209 =
  | FragmentSelf209["__typename"]
  | FragmentSelf209["typenameHint"] | FragmentToken207 | FragmentToken208;
