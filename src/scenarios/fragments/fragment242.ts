import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken240 } from "./fragment240";
import type { FragmentToken241 } from "./fragment241";

export const FRAGMENT_242 = gql(`
  fragment Fragment242 on Member241 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_241
    memberCount_241
    memberMetric_241
  }
`);

type FragmentResult242 = ResultOf<typeof FRAGMENT_242>;
type FragmentSelf242 = NonNullable<FragmentResult242>;

export type FragmentToken242 =
  | FragmentSelf242["__typename"]
  | FragmentSelf242["typenameHint"] | FragmentToken240 | FragmentToken241;
