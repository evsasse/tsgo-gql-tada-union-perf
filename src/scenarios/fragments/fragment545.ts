import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken543 } from "./fragment543";
import type { FragmentToken544 } from "./fragment544";

export const FRAGMENT_545 = gql(`
  fragment Fragment545 on Member264 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_264
    memberCount_264
    memberMetric_264
  }
`);

type FragmentResult545 = ResultOf<typeof FRAGMENT_545>;
type FragmentSelf545 = NonNullable<FragmentResult545>;

export type FragmentToken545 =
  | FragmentSelf545["__typename"]
  | FragmentSelf545["typenameHint"] | FragmentToken543 | FragmentToken544;
