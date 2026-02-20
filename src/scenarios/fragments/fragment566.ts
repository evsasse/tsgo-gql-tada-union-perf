import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken564 } from "./fragment564";
import type { FragmentToken565 } from "./fragment565";

export const FRAGMENT_566 = gql(`
  fragment Fragment566 on Member05 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_05
    memberCount_05
    memberMetric_05
  }
`);

type FragmentResult566 = ResultOf<typeof FRAGMENT_566>;
type FragmentSelf566 = NonNullable<FragmentResult566>;

export type FragmentToken566 =
  | FragmentSelf566["__typename"]
  | FragmentSelf566["typenameHint"] | FragmentToken564 | FragmentToken565;
