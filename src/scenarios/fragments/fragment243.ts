import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken241 } from "./fragment241";
import type { FragmentToken242 } from "./fragment242";

export const FRAGMENT_243 = gql(`
  fragment Fragment243 on Member242 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_242
    memberCount_242
    memberMetric_242
  }
`);

type FragmentResult243 = ResultOf<typeof FRAGMENT_243>;
type FragmentSelf243 = NonNullable<FragmentResult243>;

export type FragmentToken243 =
  | FragmentSelf243["__typename"]
  | FragmentSelf243["typenameHint"] | FragmentToken241 | FragmentToken242;
