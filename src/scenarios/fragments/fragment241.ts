import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken239 } from "./fragment239";
import type { FragmentToken240 } from "./fragment240";

export const FRAGMENT_241 = gql(`
  fragment Fragment241 on Member240 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_240
    memberCount_240
    memberMetric_240
  }
`);

type FragmentResult241 = ResultOf<typeof FRAGMENT_241>;
type FragmentSelf241 = NonNullable<FragmentResult241>;

export type FragmentToken241 =
  | FragmentSelf241["__typename"]
  | FragmentSelf241["typenameHint"] | FragmentToken239 | FragmentToken240;
