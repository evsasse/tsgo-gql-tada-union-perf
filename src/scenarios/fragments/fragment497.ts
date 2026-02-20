import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken495 } from "./fragment495";
import type { FragmentToken496 } from "./fragment496";

export const FRAGMENT_497 = gql(`
  fragment Fragment497 on Member216 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_216
    memberCount_216
    memberMetric_216
  }
`);

type FragmentResult497 = ResultOf<typeof FRAGMENT_497>;
type FragmentSelf497 = NonNullable<FragmentResult497>;

export type FragmentToken497 =
  | FragmentSelf497["__typename"]
  | FragmentSelf497["typenameHint"] | FragmentToken495 | FragmentToken496;
