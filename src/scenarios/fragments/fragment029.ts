import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken027 } from "./fragment027";
import type { FragmentToken028 } from "./fragment028";

export const FRAGMENT_029 = gql(`
  fragment Fragment029 on Member28 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_28
    memberCount_28
    memberMetric_28
  }
`);

type FragmentResult029 = ResultOf<typeof FRAGMENT_029>;
type FragmentSelf029 = NonNullable<FragmentResult029>;

export type FragmentToken029 =
  | FragmentSelf029["__typename"]
  | FragmentSelf029["typenameHint"] | FragmentToken027 | FragmentToken028;
