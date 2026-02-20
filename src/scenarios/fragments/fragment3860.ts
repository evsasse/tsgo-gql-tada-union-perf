import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3858 } from "./fragment3858";
import type { FragmentToken3859 } from "./fragment3859";

export const FRAGMENT_3860 = gql(`
  fragment Fragment3860 on Member219 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_219
    memberCount_219
    memberMetric_219
  }
`);

type FragmentResult3860 = ResultOf<typeof FRAGMENT_3860>;
type FragmentSelf3860 = NonNullable<FragmentResult3860>;

export type FragmentToken3860 =
  | FragmentSelf3860["__typename"]
  | FragmentSelf3860["typenameHint"] | FragmentToken3858 | FragmentToken3859;
