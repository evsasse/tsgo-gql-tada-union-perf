import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken484 } from "./fragment484";
import type { FragmentToken485 } from "./fragment485";

export const FRAGMENT_486 = gql(`
  fragment Fragment486 on Member205 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_205
    memberCount_205
    memberMetric_205
  }
`);

type FragmentResult486 = ResultOf<typeof FRAGMENT_486>;
type FragmentSelf486 = NonNullable<FragmentResult486>;

export type FragmentToken486 =
  | FragmentSelf486["__typename"]
  | FragmentSelf486["typenameHint"] | FragmentToken484 | FragmentToken485;
