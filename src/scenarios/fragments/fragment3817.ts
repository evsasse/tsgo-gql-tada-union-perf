import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3815 } from "./fragment3815";
import type { FragmentToken3816 } from "./fragment3816";

export const FRAGMENT_3817 = gql(`
  fragment Fragment3817 on Member176 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_176
    memberCount_176
    memberMetric_176
  }
`);

type FragmentResult3817 = ResultOf<typeof FRAGMENT_3817>;
type FragmentSelf3817 = NonNullable<FragmentResult3817>;

export type FragmentToken3817 =
  | FragmentSelf3817["__typename"]
  | FragmentSelf3817["typenameHint"] | FragmentToken3815 | FragmentToken3816;
