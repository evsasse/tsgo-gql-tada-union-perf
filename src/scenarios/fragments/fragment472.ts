import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken470 } from "./fragment470";
import type { FragmentToken471 } from "./fragment471";

export const FRAGMENT_472 = gql(`
  fragment Fragment472 on Member191 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_191
    memberCount_191
    memberMetric_191
  }
`);

type FragmentResult472 = ResultOf<typeof FRAGMENT_472>;
type FragmentSelf472 = NonNullable<FragmentResult472>;

export type FragmentToken472 =
  | FragmentSelf472["__typename"]
  | FragmentSelf472["typenameHint"] | FragmentToken470 | FragmentToken471;
