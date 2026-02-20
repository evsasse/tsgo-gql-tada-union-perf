import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken330 } from "./fragment330";
import type { FragmentToken331 } from "./fragment331";

export const FRAGMENT_332 = gql(`
  fragment Fragment332 on Member51 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_51
    memberCount_51
    memberMetric_51
  }
`);

type FragmentResult332 = ResultOf<typeof FRAGMENT_332>;
type FragmentSelf332 = NonNullable<FragmentResult332>;

export type FragmentToken332 =
  | FragmentSelf332["__typename"]
  | FragmentSelf332["typenameHint"] | FragmentToken330 | FragmentToken331;
