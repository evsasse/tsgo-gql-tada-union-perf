import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken325 } from "./fragment325";
import type { FragmentToken326 } from "./fragment326";

export const FRAGMENT_327 = gql(`
  fragment Fragment327 on Member46 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_46
    memberCount_46
    memberMetric_46
  }
`);

type FragmentResult327 = ResultOf<typeof FRAGMENT_327>;
type FragmentSelf327 = NonNullable<FragmentResult327>;

export type FragmentToken327 =
  | FragmentSelf327["__typename"]
  | FragmentSelf327["typenameHint"] | FragmentToken325 | FragmentToken326;
