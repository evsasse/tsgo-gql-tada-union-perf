import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken509 } from "./fragment509";
import type { FragmentToken510 } from "./fragment510";

export const FRAGMENT_511 = gql(`
  fragment Fragment511 on Member230 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_230
    memberCount_230
    memberMetric_230
  }
`);

type FragmentResult511 = ResultOf<typeof FRAGMENT_511>;
type FragmentSelf511 = NonNullable<FragmentResult511>;

export type FragmentToken511 =
  | FragmentSelf511["__typename"]
  | FragmentSelf511["typenameHint"] | FragmentToken509 | FragmentToken510;
