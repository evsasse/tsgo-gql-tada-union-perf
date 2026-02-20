import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken946 } from "./fragment946";
import type { FragmentToken947 } from "./fragment947";

export const FRAGMENT_948 = gql(`
  fragment Fragment948 on Member107 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_107
    memberCount_107
    memberMetric_107
  }
`);

type FragmentResult948 = ResultOf<typeof FRAGMENT_948>;
type FragmentSelf948 = NonNullable<FragmentResult948>;

export type FragmentToken948 =
  | FragmentSelf948["__typename"]
  | FragmentSelf948["typenameHint"] | FragmentToken946 | FragmentToken947;
