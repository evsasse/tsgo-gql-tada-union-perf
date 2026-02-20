import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken063 } from "./fragment063";
import type { FragmentToken064 } from "./fragment064";

export const FRAGMENT_065 = gql(`
  fragment Fragment065 on Member64 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_64
    memberCount_64
    memberMetric_64
  }
`);

type FragmentResult065 = ResultOf<typeof FRAGMENT_065>;
type FragmentSelf065 = NonNullable<FragmentResult065>;

export type FragmentToken065 =
  | FragmentSelf065["__typename"]
  | FragmentSelf065["typenameHint"] | FragmentToken063 | FragmentToken064;
