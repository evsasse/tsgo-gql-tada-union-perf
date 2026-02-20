import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken382 } from "./fragment382";
import type { FragmentToken383 } from "./fragment383";

export const FRAGMENT_384 = gql(`
  fragment Fragment384 on Member103 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_103
    memberCount_103
    memberMetric_103
  }
`);

type FragmentResult384 = ResultOf<typeof FRAGMENT_384>;
type FragmentSelf384 = NonNullable<FragmentResult384>;

export type FragmentToken384 =
  | FragmentSelf384["__typename"]
  | FragmentSelf384["typenameHint"] | FragmentToken382 | FragmentToken383;
