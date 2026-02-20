import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken690 } from "./fragment690";
import type { FragmentToken691 } from "./fragment691";

export const FRAGMENT_692 = gql(`
  fragment Fragment692 on Member131 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_131
    memberCount_131
    memberMetric_131
  }
`);

type FragmentResult692 = ResultOf<typeof FRAGMENT_692>;
type FragmentSelf692 = NonNullable<FragmentResult692>;

export type FragmentToken692 =
  | FragmentSelf692["__typename"]
  | FragmentSelf692["typenameHint"] | FragmentToken690 | FragmentToken691;
