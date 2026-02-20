import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken884 } from "./fragment884";
import type { FragmentToken885 } from "./fragment885";

export const FRAGMENT_886 = gql(`
  fragment Fragment886 on Member45 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_45
    memberCount_45
    memberMetric_45
  }
`);

type FragmentResult886 = ResultOf<typeof FRAGMENT_886>;
type FragmentSelf886 = NonNullable<FragmentResult886>;

export type FragmentToken886 =
  | FragmentSelf886["__typename"]
  | FragmentSelf886["typenameHint"] | FragmentToken884 | FragmentToken885;
