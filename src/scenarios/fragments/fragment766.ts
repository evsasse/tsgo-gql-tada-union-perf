import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken764 } from "./fragment764";
import type { FragmentToken765 } from "./fragment765";

export const FRAGMENT_766 = gql(`
  fragment Fragment766 on Member205 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_205
    memberCount_205
    memberMetric_205
  }
`);

type FragmentResult766 = ResultOf<typeof FRAGMENT_766>;
type FragmentSelf766 = NonNullable<FragmentResult766>;

export type FragmentToken766 =
  | FragmentSelf766["__typename"]
  | FragmentSelf766["typenameHint"] | FragmentToken764 | FragmentToken765;
