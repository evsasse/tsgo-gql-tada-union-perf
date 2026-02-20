import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken945 } from "./fragment945";
import type { FragmentToken946 } from "./fragment946";

export const FRAGMENT_947 = gql(`
  fragment Fragment947 on Member106 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_106
    memberCount_106
    memberMetric_106
  }
`);

type FragmentResult947 = ResultOf<typeof FRAGMENT_947>;
type FragmentSelf947 = NonNullable<FragmentResult947>;

export type FragmentToken947 =
  | FragmentSelf947["__typename"]
  | FragmentSelf947["typenameHint"] | FragmentToken945 | FragmentToken946;
