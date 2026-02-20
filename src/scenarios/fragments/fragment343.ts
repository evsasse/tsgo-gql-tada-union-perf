import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken341 } from "./fragment341";
import type { FragmentToken342 } from "./fragment342";

export const FRAGMENT_343 = gql(`
  fragment Fragment343 on Member62 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_62
    memberCount_62
    memberMetric_62
  }
`);

type FragmentResult343 = ResultOf<typeof FRAGMENT_343>;
type FragmentSelf343 = NonNullable<FragmentResult343>;

export type FragmentToken343 =
  | FragmentSelf343["__typename"]
  | FragmentSelf343["typenameHint"] | FragmentToken341 | FragmentToken342;
