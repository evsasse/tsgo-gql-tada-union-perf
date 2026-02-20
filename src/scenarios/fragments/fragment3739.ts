import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3737 } from "./fragment3737";
import type { FragmentToken3738 } from "./fragment3738";

export const FRAGMENT_3739 = gql(`
  fragment Fragment3739 on Member98 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_98
    memberCount_98
    memberMetric_98
  }
`);

type FragmentResult3739 = ResultOf<typeof FRAGMENT_3739>;
type FragmentSelf3739 = NonNullable<FragmentResult3739>;

export type FragmentToken3739 =
  | FragmentSelf3739["__typename"]
  | FragmentSelf3739["typenameHint"] | FragmentToken3737 | FragmentToken3738;
