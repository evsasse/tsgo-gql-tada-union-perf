import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken721 } from "./fragment721";
import type { FragmentToken722 } from "./fragment722";

export const FRAGMENT_723 = gql(`
  fragment Fragment723 on Member162 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_162
    memberCount_162
    memberMetric_162
  }
`);

type FragmentResult723 = ResultOf<typeof FRAGMENT_723>;
type FragmentSelf723 = NonNullable<FragmentResult723>;

export type FragmentToken723 =
  | FragmentSelf723["__typename"]
  | FragmentSelf723["typenameHint"] | FragmentToken721 | FragmentToken722;
