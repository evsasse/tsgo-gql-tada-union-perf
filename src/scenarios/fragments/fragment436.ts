import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken434 } from "./fragment434";
import type { FragmentToken435 } from "./fragment435";

export const FRAGMENT_436 = gql(`
  fragment Fragment436 on Member155 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_155
    memberCount_155
    memberMetric_155
  }
`);

type FragmentResult436 = ResultOf<typeof FRAGMENT_436>;
type FragmentSelf436 = NonNullable<FragmentResult436>;

export type FragmentToken436 =
  | FragmentSelf436["__typename"]
  | FragmentSelf436["typenameHint"] | FragmentToken434 | FragmentToken435;
