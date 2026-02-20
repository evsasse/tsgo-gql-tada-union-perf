import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken328 } from "./fragment328";
import type { FragmentToken329 } from "./fragment329";

export const FRAGMENT_330 = gql(`
  fragment Fragment330 on Member49 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_49
    memberCount_49
    memberMetric_49
  }
`);

type FragmentResult330 = ResultOf<typeof FRAGMENT_330>;
type FragmentSelf330 = NonNullable<FragmentResult330>;

export type FragmentToken330 =
  | FragmentSelf330["__typename"]
  | FragmentSelf330["typenameHint"] | FragmentToken328 | FragmentToken329;
